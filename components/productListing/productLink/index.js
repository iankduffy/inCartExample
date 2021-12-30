import ModalBox from "components/shared/modalBox"
import { useState } from "react"
import ProductDetails from '../productDetails'

const ProductLink = ({attributes, variants}) => {
  const [modalOpen, setModelOpen] = useState(false)

  const { title, picture_url, price, rating } = attributes
  return (
    <>
      <div onClick={() => setModelOpen(true)} className="u-dis-b u-pad-v-md u-curs-pointer">
        <img src={picture_url} alt={title} className="u-mar-b-sm"/>
        <h4>{title}</h4>
        <p>£{price}</p>
        <button className="col-12 u-pad-v-sm u-mar-b-sm">View</button>
        <p>Ratings: {rating}</p>
      </div>
      <ModalBox title={title} isShowing={modalOpen} handleClose={() => setModelOpen(false)}>
        <ProductDetails {...attributes} variants={variants}/>
      </ModalBox>
    </>
  )
}

export default ProductLink