/*

import img1 from '../imgs/img1.jpg'
import img2 from '../imgs/img2.jpg'

import productsData from '../Exam.json';

import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    //const products = productsData;
    // Ürünler listesini karıştırma
    const shuffledProducts = productsData.sort(() => 0.5 - Math.random());
    const randomProducts = shuffledProducts.slice(0, 3);
    const randomProducts2 = shuffledProducts.slice(3, 6);

    const toTekUrunPage = (product) => {
        navigate(`/urun/${product.id}`, { state: { prodData: product } });
    }

    return (
        <div className='home'>

            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img1} class="home-items-img d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={img2} class="home-items-img d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon nb-btn" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon nb-btn" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div className='satıs-urunler min-vh-100 d-flex flex-column gap-5 align-items-center justify-content-center'>
                <div className='d-flex gap-5'>

                    {randomProducts.map((product) => (
                        <div onClick={() => toTekUrunPage(product)} key={product.id} className='d-flex flex-column product'>
                            <img src={img1} alt='-'/>
                            <div className='product-det d-flex justify-content-between align-items-center'>
                                <div>{product.ayakkabi_adi}</div>
                                <div>{product.fiyat}$</div>
                            </div>
                        </div>
                    ))}

                </div>

                <div className='d-flex gap-5'>

                    {randomProducts2.map((product) => (
                        <div onClick={() => toTekUrunPage(product)} key={product.id} className='d-flex flex-column product'>
                            <img src={img1} alt='-' />
                            <div className='product-det d-flex justify-content-between align-items-center'>
                                <div>{product.ayakkabi_adi}</div>
                                <div>{product.fiyat}$</div>
                            </div>
                        </div>
                    ))}

                </div>
                
            </div>
        </div>
    );
}

export default Home;

*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import img1 from '../imgs/img1.jpg';
import img2 from '../imgs/img2.jpg';

function Home() {
    const [randomProducts, setRandomProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/products/random');
            setRandomProducts(response.data);
        } catch (error) {
            console.error('Ürünler getirilirken hata oluştu:', error);
        }
    };

    const toTekUrunPage = (product) => {
        navigate(`/urun/${product.id}`, { state: { prodData: product } });
    };

    return (
        <div className='home'>
            <div id='carouselExample' className='carousel slide'>
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <img src={img1} className='home-items-img d-block w-100' alt='...' />
                    </div>
                    <div className='carousel-item'>
                        <img src={img2} className='home-items-img d-block w-100' alt='...' />
                    </div>
                </div>
                <button className='carousel-control-prev' type='button' data-bs-target='#carouselExample' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon nb-btn' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type='button' data-bs-target='#carouselExample' data-bs-slide='next'>
                    <span className='carousel-control-next-icon nb-btn' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>

            <div className='satıs-urunler min-vh-100 d-flex flex-column gap-5 align-items-center justify-content-center'>
                <div className='d-flex gap-5'>
                    {randomProducts.slice(0, 3).map((product) => (
                        <div onClick={() => toTekUrunPage(product)} key={product.id} className='d-flex flex-column product'>
                            <img src={img1} alt='-' />
                            <div className='product-det d-flex justify-content-between align-items-center'>
                                <div>{product.ayakkabi_adi}</div>
                                <div>{product.fiyat}$</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='d-flex gap-5'>
                    {randomProducts.slice(3, 6).map((product) => (
                        <div onClick={() => toTekUrunPage(product)} key={product.id} className='d-flex flex-column product'>
                            <img src={img1} alt='-' />
                            <div className='product-det d-flex justify-content-between align-items-center'>
                                <div>{product.ayakkabi_adi}</div>
                                <div>{product.fiyat}$</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
