/*

function Cocuk() {
    return (
        <div className="d-flex indirim-page align-items-center justify-content-center">
            Cocuk
        </div>
    )
}
export default Cocuk;

*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard'; // Ürün kartı bileşenini import edin veya uygun şekilde düzenleyin

function Cocuk() {
    const [cocukUrunleri, setCocukUrunleri] = useState([]);

    useEffect(() => {
        fetchCocukUrunleri();
    }, []);

    const fetchCocukUrunleri = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/urunler/cocuk'); // Backend'de çocuk kategorisine ait ürünleri getiren endpoint
            setCocukUrunleri(response.data);
        } catch (error) {
            console.error('Çocuk ürünleri getirilirken hata oluştu:', error);
        }
    };

    return (
        <div className="d-flex flex-wrap gap-3">
            {cocukUrunleri.map((urun) => (
                <ProductCard key={urun._id} urun={urun} />
                // ProductCard bileşeni, urun prop'u ile verilen ürünü gösterir
            ))}
        </div>
    );
}

export default Cocuk;
