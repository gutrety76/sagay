import Head from "next/head";
import {useDispatch, useSelector} from "react-redux";
import {setMenuFilter, toggleValueInArray} from "../slices/menuSlice";
import {useEffect, useState} from "react";

export default function Addprod() {
    const dispatch = useDispatch()
    const {typeOfSelectedProductsToAdd} = useSelector(state => state.menuSlice)
    dispatch(setMenuFilter(0))

    function createObjectArray(...nameValues) {
        return nameValues.map(nameValue => ({name: nameValue}));
    }

    const [filterTypes, setFilterTypes] = useState([])
    function ArrSelect() {


        const myArray = createObjectArray(...typeOfSelectedProductsToAdd);
        setFilterTypes(myArray)

    }
    useEffect(()=>{
        ArrSelect()
    },[typeOfSelectedProductsToAdd])
    const [name,setName] = useState()
    const [price,setPrice] = useState()
    const [description,setDescription] = useState()
    const [link, setLink] = useState()
    const [weight, setWeight] = useState()
    const [type, setType] = useState()

    function submit(){
        console.log(name,price,description,link,weight,filterTypes)
        fetch('/api/createproduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: name,
                price: parseInt(price, 10),
                description: description,
                img: link,
                weight: parseInt(weight, 10),
                producttype: parseInt(type, 10),
                filtertypee: filterTypes
            })
        })
            .then(response => {
                if (response.ok) {
                    // обработка успешного ответа
                    alert('Product created successfully');
                } else {
                    // обработка ошибки
                    alert('Error creating product');
                }
            })
            .catch(error => {
                // обработка ошибки
                console.error('Error:', error);
            });
    }
    return (
        <><Head>
            <title>О компании</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
            <div className="min-h-[70vh] flex flex-col items-center justify-center">
                <input className="border p-2" onChange={(e)=>{setName(e.target.value)}} value={name} placeholder="Название"/>
                <input className="border p-2" onChange={(e)=>{setPrice(e.target.value)}}  type="number" value={price} placeholder="Цена"/>
                <input className="border p-2" onChange={(e)=>{setDescription(e.target.value)}} value={description} placeholder="Описание"/>
                <input className="border p-2" onChange={(e)=>{setLink(e.target.value)}} value={link} placeholder="Ссылка на картинку"/>
                <input className="border p-2" onChange={(e)=>{setWeight(e.target.value)}} type="number" value={weight} placeholder="Вес в граммах"/>
                <input className="border p-2" onChange={(e)=>{setType(e.target.value)}} type="number" value={type} placeholder="Тип продукта"/>
                <div className="flex flex-col justify-center items-center">
                    Тип продукта
                    <div className="flex items-center justify-center">
                        <button className="border p-2" onClick={() => {
                            dispatch(toggleValueInArray(1))
                        }} placeholder="Фильтр продукта">1
                        </button>
                        <button className="border p-2" onClick={() => {
                            dispatch(toggleValueInArray(2))
                        }} placeholder="Тип продукта">2
                        </button>
                        <button className="border p-2" onClick={() => {
                            dispatch(toggleValueInArray(3))
                        }} placeholder="Тип продукта">3
                        </button>
                        <button className="border p-2" onClick={() => {
                            dispatch(toggleValueInArray(4))
                        }} placeholder="Тип продукта">4
                        </button>
                        <button className="border p-2" onClick={() => {
                            dispatch(toggleValueInArray(5))
                        }} placeholder="Тип продукта">5
                        </button>
                        <button className="border p-2" onClick={() => {
                            dispatch(toggleValueInArray(6))
                        }} placeholder="Тип продукта">6
                        </button>
                    </div>
                    Выбранные типы:
                    <div className="flex items-center justify-center space-x-4">{typeOfSelectedProductsToAdd.map((content,index)=>{

                        return(<>{content},</>)})}</div>
                </div>
                <button
                    onClick={()=>{submit()}}
                    className="p-2 hover:bg-[#232323] hover:text-white px-7 border">Добавить</button>
            </div>
        </>)
}