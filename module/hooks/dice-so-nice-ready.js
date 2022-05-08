/* global game, Hooks */
import { CoC7DecaderDSNFaces } from '../apps/decader-dsn-faces.js'

export function listen () {
  Hooks.once('diceSoNiceReady', dice3d => {
    dice3d.addDicePreset({
      type: 'dt',
      labels: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '00'],
      fontScale: 0.75,
      system: 'standard'
    })
    dice3d.addDicePreset({
      type: 'do',
      labels: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '00'],
      fontScale: 0.75,
      system: 'standard'
    })
    game.CoC7DecaderDSNFaces = new CoC7DecaderDSNFaces()
  })
}