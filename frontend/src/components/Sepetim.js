/*

import imgURL from '../imgs/erkek/1.jpg'

function Sepetim() {
    return (
        <div className="d-flex indirim-page align-items-center justify-content-center">
            <div><img className="single-product-img" src={imgURL} alt="-"/></div>
            <div className="d-flex flex-column single-product-det">

                <div><h1>Paris</h1></div>
                
                <div className="det-buttons mt-3 d-flex justify-content-between">
                    <button className="my-det-btn btn-fav-ekle">Favorilere Ekle</button>
                    <button className="my-det-btn btn-spt-cikar">Sepetten çıkar</button>
                </div>

                <div className="det-aciklama d-flex flex-column mt-5">
                    <h6>Ürün Açıklaması:</h6>
                    <p>dchvakcjvaljvcakjvcajc jcbakjcvajvcaljvc avhcvakjcvakjvcakjc  ahkcvavkcvakjcba 
                        ahvckavcakjcvakjc achaggcfgaıcfa hadcycvıyavckqavc acufvajcvajvh </p>
                </div>

                <div>
                    <button className="my-det-btn btn-odeme">Ödeme Yap</button>
                </div>

            </div>
        </div>
    )
}
export default Sepetim;

*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import imgURL from '../imgs/erkek/1.jpg';

function Sepetim() {
    const [sepetUrunler, setSepetUrunler] = useState([]);

    useEffect(() => {
        // Sepetteki ürünlerin getirilmesi için bir API çağrısı yapılabilir.
        fetchSepetUrunler();
    }, []);

    const fetchSepetUrunler = async () => {
        try {
            const response = await axios.get('http://localhost:3000/sepet'); // Örnek URL, backend tarafı uygun şekilde ayarlanmalıdır.
            setSepetUrunler(response.data);
        } catch (error) {
            console.error('Sepet ürünleri getirilirken hata oluştu:', error);
        }
    };

    const removeFromSepet = async (productId) => {
        try {
            await axios.delete(`http://localhost:3000/sepet/${productId}`); // Örnek URL, backend tarafı uygun şekilde ayarlanmalıdır.
            fetchSepetUrunler(); // Ürün silindikten sonra sepeti güncelle
        } catch (error) {
            console.error('Ürün sepetten çıkarılırken hata oluştu:', error);
        }
    };

    const handlePayment = async () => {
        // Ödeme işlemi ile ilgili Axios isteği burada yapılabilir
        try {
            // Örnek ödeme işlemi Axios isteği
            const response = await axios.post('http://localhost:3000/odeme', {
                totalAmount: calculateTotalAmount(), // Ödenecek toplam tutarın gönderilmesi gerekebilir
                items: sepetUrunler.map((item) => ({
                    productId: item.productId,
                    quantity: item.quantity,
                    price: item.price
                }))
            });
            console.log('Ödeme işlemi başarıyla gerçekleştirildi:', response.data);
        } catch (error) {
            console.error('Ödeme işlemi sırasında hata oluştu:', error);
        }
    };

    const calculateTotalAmount = () => {
        // Sepetteki ürünlerin toplam tutarının hesaplanması
        return sepetUrunler.reduce((total, item) => total + item.quantity * item.price, 0);
    };

    return (
        <div className="d-flex indirim-page align-items-center justify-content-center">
            {sepetUrunler.length > 0 ? (
                sepetUrunler.map((urun) => (
                    <div key={urun.productId} className="d-flex flex-column gap-3 single-product">
                        <img className="single-product-img" src={imgURL} alt="-" />
                        <div className="d-flex flex-column single-product-det">
                            <div>
                                <h1>{urun.productName}</h1>
                            </div>
                            <div className="det-buttons mt-3 d-flex justify-content-between">
                                <button className="my-det-btn btn-fav-ekle">Favorilere Ekle</button>
                                <button className="my-det-btn btn-spt-cikar" onClick={() => removeFromSepet(urun.productId)}>Sepetten Çıkar</button>
                            </div>
                            <div className="det-aciklama d-flex flex-column mt-5">
                                <h6>Ürün Açıklaması:</h6>
                                <p>{urun.aciklama}</p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div>Sepetiniz boş.</div>
            )}
            {sepetUrunler.length > 0 && (
                <div>
                    <button className="my-det-btn btn-odeme" onClick={handlePayment}>Ödeme Yap</button>
                </div>
            )}
        </div>
    );
}

export default Sepetim;
