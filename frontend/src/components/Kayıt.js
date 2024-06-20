/*
function Kayit() {
    return (
        <div className="d-flex align-items-center justify-content-center giris-kayıt-set">
            <div className="giris d-flex flex-column gap-3 align-items-center">
                <h4>Kayıt Ol</h4>
                <div className="d-flex flex-column gap-2">
                    <input type="text" placeholder="Ad" className="giris-kayit-input" />
                    <input type="text" placeholder="Soyad" className="giris-kayit-input" />
                    <input type="text" placeholder="E-mail" className="giris-kayit-input" />
                    <input type="text" placeholder="Telefon numarası" className="giris-kayit-input" />
                    <input type="text" placeholder="Cinsiyet" className="giris-kayit-input" />
                    <input type="text" placeholder="Kullanici Adı" className="giris-kayit-input" />
                    <input type="text" placeholder="*****" className="giris-kayit-input" />
                </div>
                <div className="giris-btn-set d-flex justify-content-end">
                    <button className="btn btn-danger" >Kayıt Ol</button>
                </div>
                <div className="giris-btn-set-1 d-flex justify-content-end">
                    <a href="/giris">Giriş Yap</a>
                </div>
            </div>
        </div>
    );
}
export default Kayit;

*/

import React, { useState } from 'react';
import axios from 'axios';

function Kayit() {
    const [ad, setAd] = useState('');
    const [soyad, setSoyad] = useState('');
    const [email, setEmail] = useState('');
    const [telefon, setTelefon] = useState('');
    const [cinsiyet, setCinsiyet] = useState('');
    const [kullaniciAdi, setKullaniciAdi] = useState('');
    const [sifre, setSifre] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newUser = {
            ad: ad,
            soyad: soyad,
            email: email,
            telefon: telefon,
            cinsiyet: cinsiyet,
            kullaniciAdi: kullaniciAdi,
            sifre: sifre
        };

        try {
            const response = await axios.post('http://localhost:3000/kayit', newUser);
            console.log('Kayıt işlemi başarılı:', response.data);
            // İşlem başarılı ise kullanıcıyı başka bir sayfaya yönlendirme işlemleri buraya eklenebilir.
        } catch (error) {
            console.error('Kayıt işlemi sırasında hata oluştu:', error);
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center giris-kayıt-set">
            <div className="giris d-flex flex-column gap-3 align-items-center">
                <h4>Kayıt Ol</h4>
                <form onSubmit={handleSubmit}>
                    <div className="d-flex flex-column gap-2">
                        <input type="text" placeholder="Ad" className="giris-kayit-input" value={ad} onChange={(e) => setAd(e.target.value)} />
                        <input type="text" placeholder="Soyad" className="giris-kayit-input" value={soyad} onChange={(e) => setSoyad(e.target.value)} />
                        <input type="text" placeholder="E-mail" className="giris-kayit-input" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder="Telefon numarası" className="giris-kayit-input" value={telefon} onChange={(e) => setTelefon(e.target.value)} />
                        <input type="text" placeholder="Cinsiyet" className="giris-kayit-input" value={cinsiyet} onChange={(e) => setCinsiyet(e.target.value)} />
                        <input type="text" placeholder="Kullanici Adı" className="giris-kayit-input" value={kullaniciAdi} onChange={(e) => setKullaniciAdi(e.target.value)} />
                        <input type="password" placeholder="*****" className="giris-kayit-input" value={sifre} onChange={(e) => setSifre(e.target.value)} />
                    </div>
                    <div className="giris-btn-set d-flex justify-content-end">
                        <button type="submit" className="btn btn-danger">Kayıt Ol</button>
                    </div>
                </form>
                <div className="giris-btn-set-1 d-flex justify-content-end">
                    <a href="/giris">Giriş Yap</a>
                </div>
            </div>
        </div>
    );
}

export default Kayit;
