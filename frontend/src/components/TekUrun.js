/*

import { useLocation } from "react-router-dom";
import imgURL from '../imgs/erkek/1.jpg'

function TekUrun() {
    
    const location = useLocation();
    const prodData = location.state && location.state.prodData;

    const bedenler = prodData.beden.join(", ");
    const renkler = prodData.renk.join(", ");

    return (
        <div key={prodData.id} className="tek-urun-page d-flex align-items-center justify-content-center gap-5">
            <div><img className="single-product-img" src={imgURL} alt="-"/></div>
            <div className="d-flex flex-column single-product-det">
                <h1>{prodData.ayakkabi_adi}</h1>
                <div className="d-flex float-left"><h6>Beden:</h6> &nbsp; {bedenler}</div>
                <div className="d-flex float-left"><h6>Renk:</h6> &nbsp; {renkler}</div>

                <div className="det-buttons mt-3 d-flex justify-content-between">
                    <button className="my-det-btn btn-fav-ekle">Favorilere Ekle</button>
                    <button className="my-det-btn btn-spt-ekle">Sepete Ekle</button>
                </div>

                <div className="det-aciklama d-flex flex-column mt-5">
                    <h6>Ürün Açıklaması:</h6>
                    {prodData.aciklama}
                </div>
            </div>
        </div>
    )
}

export default TekUrun;

*/

import React from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import imgURL from '../imgs/erkek/1.jpg';

function TekUrun() {
    const location = useLocation();
    const prodData = location.state && location.state.prodData;

    const bedenler = prodData.beden.join(", ");
    const renkler = prodData.renk.join(", ");

    const addToFavorites = async () => {
        try {
            await axios.post(`http://localhost:3000/favori/ekle`, {
                productId: prodData.id,
                productName: prodData.ayakkabi_adi,
                description: prodData.aciklama,
                price: prodData.fiyat
            });
            console.log('Ürün favorilere eklendi');
        } catch (error) {
            console.error('Favori eklenirken hata oluştu:', error);
        }
    };

    const addToCart = async () => {
        try {
            await axios.post(`http://localhost:3000/sepet/ekle`, {
                productId: prodData.id,
                productName: prodData.ayakkabi_adi,
                quantity: 1, // Örnek olarak 1 ürün ekliyoruz, isteğe göre ayarlanabilir
                price: prodData.fiyat
            });
            console.log('Ürün sepete eklendi');
        } catch (error) {
            console.error('Sepete eklenirken hata oluştu:', error);
        }
    };

    return (
        <div key={prodData.id} className="tek-urun-page d-flex align-items-center justify-content-center gap-5">
            <div><img className="single-product-img" src={imgURL} alt="-"/></div>
            <div className="d-flex flex-column single-product-det">
                <h1>{prodData.ayakkabi_adi}</h1>
                <div className="d-flex float-left"><h6>Beden:</h6> &nbsp; {bedenler}</div>
                <div className="d-flex float-left"><h6>Renk:</h6> &nbsp; {renkler}</div>

                <div className="det-buttons mt-3 d-flex justify-content-between">
                    <button className="my-det-btn btn-fav-ekle" onClick={addToFavorites}>Favorilere Ekle</button>
                    <button className="my-det-btn btn-spt-ekle" onClick={addToCart}>Sepete Ekle</button>
                </div>

                <div className="det-aciklama d-flex flex-column mt-5">
                    <h6>Ürün Açıklaması:</h6>
                    {prodData.aciklama}
                </div>
            </div>
        </div>
    )
}

export default TekUrun;
