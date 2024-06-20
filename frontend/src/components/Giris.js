/*
function Giris() {
    return (
        <div className="d-flex align-items-center justify-content-center giris-kayıt-set">
            <div className="giris d-flex flex-column gap-3 align-items-center">
                <h4>Giriş Yap</h4>
                <div className="d-flex flex-column gap-2">
                    <input type="text" placeholder="Kullanici Adı" className="giris-kayit-input" />
                    <input type="password" placeholder="*****" className="giris-kayit-input" />
                </div>
                <div className="giris-btn-set d-flex justify-content-end">
                    <button className="btn btn-success" >Giriş Yap</button>
                </div>
                <div className="giris-btn-set-1 d-flex justify-content-end">
                    <a href="/kayit">Kayıt Ol</a>
                </div>
            </div>
        </div>
    );
}
export default Giris;

*/

import React, { useState } from 'react';
import axios from 'axios';

function Giris() {
    const [kullaniciAdi, setKullaniciAdi] = useState('');
    const [sifre, setSifre] = useState('');

    const handleGiris = async () => {
        try {
            const response = await axios.post('http://localhost:3000/giris', {
                kullaniciAdi: kullaniciAdi,
                sifre: sifre
            });
            console.log('Giriş başarılı:', response.data);
            // Başarılı giriş durumunda kullanıcıyı yönlendirme yapabilirsiniz
            // Örneğin: history.push('/profil');
        } catch (error) {
            console.error('Giriş yaparken hata oluştu:', error);
            // Hata durumunda kullanıcıya uygun mesaj gösterilebilir
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center giris-kayıt-set">
            <div className="giris d-flex flex-column gap-3 align-items-center">
                <h4>Giriş Yap</h4>
                <div className="d-flex flex-column gap-2">
                    <input
                        type="text"
                        placeholder="Kullanıcı Adı"
                        className="giris-kayit-input"
                        value={kullaniciAdi}
                        onChange={(e) => setKullaniciAdi(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="*****"
                        className="giris-kayit-input"
                        value={sifre}
                        onChange={(e) => setSifre(e.target.value)}
                    />
                </div>
                <div className="giris-btn-set d-flex justify-content-end">
                    <button className="btn btn-success" onClick={handleGiris}>
                        Giriş Yap
                    </button>
                </div>
                <div className="giris-btn-set-1 d-flex justify-content-end">
                    <a href="/kayit">Kayıt Ol</a>
                </div>
            </div>
        </div>
    );
}

export default Giris;
