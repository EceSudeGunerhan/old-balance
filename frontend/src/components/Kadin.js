/*
function Kadin() {
    return (
        <div className="d-flex indirim-page align-items-center justify-content-center">
            Kadın
        </div>
    )
}
export default Kadin;

*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard'; // Ürün kartı bileşenini import edin veya uygun şekilde düzenleyin

function Kadin() {
    const [kadinUrunleri, setKadinUrunleri] = useState([]);

    useEffect(() => {
        fetchKadinUrunleri();
    }, []);

    const fetchKadinUrunleri = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/urunler/kadin'); // Backend'de kadin kategorisine ait ürünleri getiren endpoint
            setKadinUrunleri(response.data);
        } catch (error) {
            console.error('Kadın ürünleri getirilirken hata oluştu:', error);
        }
    };

    return (
        <div className="d-flex flex-wrap gap-3">
            {kadinUrunleri.map((urun) => (
                <ProductCard key={urun._id} urun={urun} />
                // ProductCard bileşeni, urun prop'u ile verilen ürünü gösterir
            ))}
        </div>
    );
}

export default Kadin;
