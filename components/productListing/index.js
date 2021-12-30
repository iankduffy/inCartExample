import ProductLink from "./productLink"
import styles from './productListing.module.scss'

const ProductListingContainer = ({products}) => {

  return (
    <div>
      <h3>Product Listing</h3>
      <p>Deserunt ut non adipisicing ut ad culpa labore ipsum do in. Laboris cillum et non veniam ad magna Lorem commodo dolor enim minim excepteur. Officia id sunt qui qui esse elit et qui velit nisi esse officia. Amet quis ad adipisicing est enim aute tempor incididunt dolor veniam. Magna esse nisi dolore nulla veniam anim cupidatat labore reprehenderit in ullamco duis.</p>
      <div className={styles.listing}> 
        {products.map((product, key) => <ProductLink key={key} {...product}/>)}
      </div>
    </div>
  )
}

export default ProductListingContainer