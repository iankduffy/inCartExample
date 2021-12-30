import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from 'components/layout'
import ProductListingContainer from 'components/productListing'
import data from 'data/products.json'

const ProductListing = ({products}) => {
  console.log(products)
  return (
    <Layout>
      <ProductListingContainer products={products} />
    </Layout>
  )
}

export default ProductListing

export async function getStaticProps({ params, preview = false, ...props }) {
  const products = data

  return {
    props: {
      products: products, 
    },
  }
}