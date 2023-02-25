import Head from "next/head";
import {useDispatch, useSelector} from "react-redux";
import {setContent, setMenuFilter, toggleValueInArray} from "../slices/menuSlice";
import {useEffect, useState} from "react";
import MenuTemplateForNonFilterterd from "../components/MenuTemplateForNonFilterterd";
import ItemCart from "../components/itemCart";

export default function Deleteprod() {
    const dispatch = useDispatch()
    const {content} = useSelector(state => state.menuSlice)

    function fet(){
        fetch("api/findallproducts").then(r => r.json()).then(r => dispatch(setContent(r)))

    }
    useEffect(()=>{
            fet()

    },[])


    function submit(id){

        fetch('/api/deleteexactproduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        })
            .then(response => {
                if (response.ok) {
                    // обработка успешного ответа
                    alert('Product deleted');
                } else {
                    // обработка ошибки
                    alert('Error deleting product');
                }
                fet()
            })
            .catch(error => {
                // обработка ошибки
                console.error('Error:', error);
            });
    }
    return (
        <><Head>
            <title>Удаление продуктов</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
            <div className="grid grid-cols-1 md:grid-cols-3 place-items-center">
                {content.map((content,index)=>{
                    return(<div key={index} className="p-4 flex flex-col items-center justify-center">
                        <ItemCart id={content.id} description={content.description}  img={content.img}
                                  price={content.price} title={content.title} weight={content.weight}/>
                        <button onClick={()=>{submit(content.id)}} className="w-full bg-black text-white">Удалить</button>
                    </div>)
                })}
            </div>
        </>)
}