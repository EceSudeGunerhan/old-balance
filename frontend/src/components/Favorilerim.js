/*

import imgURL from '../imgs/erkek/1.jpg'

function Favorilerim() {
    return (
        <div className="d-flex indirim-page align-items-center justify-content-center">
            <div><img className="single-product-img" src={imgURL} alt="-"/></div>
            <div className="d-flex flex-column single-product-det">

                <div><h1>Paris</h1></div>
                
                <div className="det-buttons mt-3 d-flex justify-content-between">
                    <button className="my-det-btn btn-fav-cikar">Favorilerden Çıkar</button>
                    <button className="my-det-btn btn-spt-ekle">Sepete Ekle</button>
                </div>

                <div className="det-aciklama d-flex flex-column mt-5">
                    <h6>Ürün Açıklaması:</h6>
                    <p>dchvakcjvaljvcakjvcajc jcbakjcvajvcaljvc avhcvakjcvakjvcakjc  ahkcvavkcvakjcba ahvckavcakjcvakjc achaggcfgaıcfa hadcycvıyavckqavc acufvajcvajvh </p>
                </div>
            </div>
        </div>
    )
}
export default Favorilerim;

*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import imgURL from '../imgs/erkek/1.jpg';

function Favorilerim() {
    const [favoriUrunler, setFavoriUrunler] = useState([]);

    useEffect(() => {
        fetchFavoriUrunler();
    }, []);

    const fetchFavoriUrunler = async () => {
        try {
            const response = await axios.get('http://localhost:3000/favori-urunler'); // Favori ürünleri getiren endpoint
            setFavoriUrunler(response.data); // Gelen veriyi state'e kaydet
        } catch (error) {
            console.error('Favori ürünleri getirirken hata oluştu:', error);
        }
    };

    const handleFavoriCikar = (urunId) => {
        // Favori çıkarma işlemi için backend'e istek gönderilebilir
        axios.delete(`http://localhost:3000/favori-urunler/${urunId}`)
            .then(response => {
                console.log('Favori ürün başarıyla çıkarıldı:', response.data);
                // Favori çıkarıldıktan sonra sayfayı güncellemek için gerekli işlemler yapılabilir
                fetchFavoriUrunler(); // Favori ürünleri yeniden getir
            })
            .catch(error => {
                console.error('Favori ürün çıkarılırken hata oluştu:', error);
            });
    };

    const handleSepeteEkle = (urunId) => {
        // Sepete ekleme işlemi için backend'e istek gönderilebilir
        axios.post(`http://localhost:3000/sepete-ekle/${urunId}`)
            .then(response => {
                console.log('Ürün başarıyla sepete eklendi:', response.data);
                // Sepete eklendikten sonra sayfayı güncellemek için gerekli işlemler yapılabilir
            })
            .catch(error => {
                console.error('Ürün sepete eklenirken hata oluştu:', error);
            });
    };

    return (
        <div className="d-flex indirim-page align-items-center justify-content-center">
            <div><img className="single-product-img" src={imgURL} alt="-"/></div>
            <div className="d-flex flex-column single-product-det">
                <div><h1>{favoriUrunler.length > 0 ? favoriUrunler[0].name : 'Ürün Adı'}</h1></div>
                <div className="det-buttons mt-3 d-flex justify-content-between">
                    <button className="my-det-btn btn-fav-cikar" onClick={() => handleFavoriCikar(favoriUrunler.length > 0 ? favoriUrunler[0]._id : '')}>Favorilerden Çıkar</button>
                    <button className="my-det-btn btn-spt-ekle" onClick={() => handleSepeteEkle(favoriUrunler.length > 0 ? favoriUrunler[0]._id : '')}>Sepete Ekle</button>
                </div>
                <div className="det-aciklama d-flex flex-column mt-5">
                    <h6>Ürün Açıklaması:</h6>
                    <p>{favoriUrunler.length > 0 ? favoriUrunler[0].description : 'Ürün açıklaması yükleniyor...'}</p>
                </div>
            </div>
        </div>
    );
}

export default Favorilerim;

