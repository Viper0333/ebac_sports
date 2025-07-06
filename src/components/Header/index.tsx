import { useSelector } from 'react-redux'

import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

import { RootState } from '../../store'

const Header = () => {
  const itens = useSelector((state: RootState) => state.carrinho.itens)

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header


// import * as S from './styles'

// import { Produto } from '../../App'

// import cesta from '../../assets/cesta.png'
// import { paraReal } from '../Produto'

// type Props = {
//   itensNoCarrinho: Produto[]
//   favoritos: Produto[]
// }

// const Header = ({ itensNoCarrinho, favoritos }: Props) => {
//   const valorTotal = itensNoCarrinho.reduce((acc, item) => {
//     acc += item.preco
//     return acc
//   }, 0)

//   return (
//     <S.Header>
//       <h1>EBAC Sports</h1>
//       <div>
//         <span>{favoritos.length} favoritos</span>
//         <img src={cesta} />
//         <span>
//           {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
//         </span>
//       </div>
//     </S.Header>
//   )
// }

// export default Header
