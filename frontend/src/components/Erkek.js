/*

function Erkek() {
    return (
        <div className="d-flex indirim-page align-items-center justify-content-center">
            Erkek
        </div>
    )
}
export default Erkek;

*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard'; // Ürün kartı bileşenini import edin veya uygun şekilde düzenleyin

function Erkek() {
    const [erkekUrunleri, setErkekUrunleri] = useState([]);

    useEffect(() => {
        fetchErkekUrunleri();
    }, []);

    const fetchErkekUrunleri = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/urunler/erkek'); // Backend'de erkek kategorisine ait ürünleri getiren endpoint
            setErkekUrunleri(response.data);
        } catch (error) {
            console.error('Erkek ürünleri getirilirken hata oluştu:', error);
        }
    };

    return (
        <div className="d-flex flex-wrap gap-3">
            {erkekUrunleri.map((urun) => (
                <ProductCard key={urun._id} urun={urun} />
                // ProductCard bileşeni, urun prop'u ile verilen ürünü gösterir
            ))}
        </div>
    );
}

export default Erkek;
