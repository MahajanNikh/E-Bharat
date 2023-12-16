import React, { useEffect, useState } from 'react'
import MyContext from './myContext'
import { toast } from 'react-toastify'
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { fireDB } from '../../firebase/FirebaseConfig'

const myState = (props) => {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17, 24, 39)';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
  })

  const addProduct = async () => {
    if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
      return toast.error("all fields are required")
    }
    setLoading(true)

    try {
      const productRef = collection(fireDB, 'products')
      await addDoc(productRef, 'products')
      toast.success('Product Added Successfully')
      getProductData();
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const [product, setPeroduct] = useState([])

  const getProductData = async () => {

    setLoading(true)

    try {

      const q = query(
        collection(fireDB, 'products'),
        orderBy('time')
      );

      const data = onSnapshot(q, (querySnapshot) => {
        let productAray = [];
        querySnapshot.forEach((doc) => {
          productAray.push({ ...doc.data(), id: doc.id })
        });
        setProducts(productAray)
        setLoading(false)
      });
      return () => data;
    }
    catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getProductData()
  }, [])
  return (
    <MyContext.Provider value={{ mode, toggleMode, loading, setLoading ,products,setProducts ,addProduct, product }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default myState