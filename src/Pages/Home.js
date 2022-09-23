import React,{useState,useEffect} from 'react'
import { Container,Row,Col,InputGroup,FormControl } from 'react-bootstrap'
import {useThemeHook} from '../GlobleComponent/ThemeProvider'
import {BiSearch} from 'react-icons/bi'
import SearchFilter from 'react-filter-search'
import ProductCart from '../components/ProductCard'

const Home=()=>{
    const[theme]=useThemeHook();
    const[searchInput,setSearchInput]=useState(' ')
    const[productData,setProductData]=useState([])

    async function getResponce(){
        const res = await fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        setProductData(await res)
    }

  useEffect(()=>{
    getResponce()
    
},[])


    return(
        // <div style={{height:'100vh',width:'100%',background:'red'}}>
        //  <h1> Home</h1>
        // </div>
        <Container className='py-4'>
            <Row className="justify-content-center">
                <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center" >
                    <h1 className={theme? 'text-light my-5':'text-black my-5'}>Search product</h1>

                    <InputGroup className="mb-3">
                    <InputGroup.Text className={theme ? 'bg-black text-dark-primary':'bg-light text-light-primary'}>
                        <BiSearch size='2rem' />
                    </InputGroup.Text>
                    <FormControl
                    placeholder="Search"
                    value={searchInput}
                    onChange={((e)=> setSearchInput(e.target.value))}
                    className={theme ? 'bg-light-black text-light': 'bg-light text-balck'}
                  
        />
      </InputGroup>

     

                </Col>
               <SearchFilter 
               value={searchInput}
               data={productData}
               renderResults={results=>(
                <Row className='justify-content-center'>
                    {results.map((item,i)=>(
                        <ProductCart data={item} key={i}/>
                    ))}
                </Row>
               )}
               />

            </Row>
        </Container>
    )
}
export default Home