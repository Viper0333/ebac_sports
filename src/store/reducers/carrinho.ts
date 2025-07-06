import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const jogo = action.payload
      const jaExiste = state.itens.find((game) => game.id === jogo.id)

      if (!jaExiste) {
        state.itens.push(jogo)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer



// import { PayloadAction, createSlice } from '@reduxjs/toolkit'
// import { Game } from '../../App'

// type CarrinhoState = {
//   itens: Game[]
// }

// const initialState: CarrinhoState = {
//   itens: []
// }

// const carrinhoSlice = createSlice({
//   name: 'carrinho',
//   initialState,
//   reducers: {
//     adicionar: (state, action: PayloadAction<Game>) => {
//       const jogo = action.payload

//       if (state.itens.find((game) => game.id === jogo.id)) {
//         alert('item ja adicionado')
//       } else {
//         state.itens.push(jogo)
//       }
//     }
//   }
// })
// export const { adicionar } = carrinhoSlice.actions
// export default carrinhoSlice.reducer
