import type { AssemblerHookHandler } from '@adonisjs/core/types/app'
import { spawn } from 'node:child_process'

/**
 *
 * The hook is responsible for launching the svelte vite build command when the application is built
 */
export default async function svelteKitBuildHook({ logger }: Parameters<AssemblerHookHandler>[0]) {
  logger.info('building sveltekit app with vite')
  await runCommand('npx vite build')
}

async function runCommand(command: string, args = []) {
  return new Promise((resolve, reject) => {
    const subprocess = spawn(command, args, { shell: true })
    let stdout = ''
    let stderr = ''

    subprocess.stdout.on('data', (data) => {
      stdout += data.toString()
    })

    subprocess.stderr.on('data', (data) => {
      stderr += data.toString()
    })

    subprocess.on('close', (code) => {
      if (code === 0) {
        resolve(stdout)
      } else {
        reject(new Error(`Command failed with code ${code}: ${stderr}`))
      }
    })

    subprocess.on('error', (err) => {
      reject(new Error(`Failed to start command: ${err.message}`))
    })
  })
}
