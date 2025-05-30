import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './UserAccount.css';
import { logoutUser } from '../features/user/registerSlice';

const UserAccount = () => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const [showAddForm, setShowAddForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    age_range: '',
    material: '',
    image: null,
  });

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'image/jpeg') {
      setNewProduct({ ...newProduct, image: file });
      setImagePreview(URL.createObjectURL(file));
    } else {
      alert('Lütfen .jpg formatında bir görsel yükleyin.');
    }
  };

  const handleProductAdd = async (e) => {
    e.preventDefault();
  
    if (!newProduct.image) {
      alert("Lütfen .jpg formatında bir görsel seçin.");
      return;
    }
  
    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("description", newProduct.description);
    formData.append("price", newProduct.price);
    formData.append("ageRange", newProduct.age_range);
    formData.append("material", newProduct.material);
    formData.append("categoryId", 1); // TODO: kategoriyi seçtir ya da değişkene bağla
    formData.append("image", newProduct.image);
  
    try {
      const res = await fetch("http://localhost:8080/api/products/upload", {
        method: "POST",
        body: formData,
      });
  
      if (!res.ok) throw new Error("Sunucu hatası");
      const data = await res.json();
  
      alert("Ürün başarıyla eklendi");
      console.log("Yeni ürün:", data);
  
      setNewProduct({
        name: '',
        description: '',
        price: '',
        age_range: '',
        material: '',
        image: null,
      });
      setImagePreview(null);
      setShowAddForm(false);
    } catch (err) {
      alert("Ürün eklenemedi: " + err.message);
    }
  };
  

  if (!user) {
    return (
      <div className="user-account">
        <h2>Lütfen giriş yapınız</h2>
        <Link className="btn primary" to="/login">Giriş Yap</Link>
      </div>
    );
  }

  const isAdmin = user.role === 'admin';

  return (
    <div className="user-account">
      <h2>Merhaba, {user.name}!</h2>
      <div className="user-info">
        <p><strong>Ad Soyad:</strong> {user.name}</p>
        <p><strong>E-posta:</strong> {user.email}</p>
        <p><strong>Rol:</strong> {user.role}</p>
      </div>

      <div className="user-actions">
        <Link to="/orders" className="btn secondary">Siparişlerim</Link>
        <Link to="/favorites" className="btn secondary">Favorilerim</Link>
        <Link to="/cart" className="btn secondary">Sepetim</Link>
        <button className="btn danger" onClick={handleLogout}>Çıkış Yap</button>
      </div>

      {isAdmin && (
        <div className="admin-panel">
          <h3>🔧 Yönetici Paneli</h3>

          <button className="btn toggle" onClick={() => setShowAddForm(!showAddForm)}>
            {showAddForm ? 'Ürün Ekleme Formunu Gizle' : 'Ürün Ekle'}
          </button>

          {showAddForm && (
            <form className="admin-form" onSubmit={handleProductAdd}>
              <input type="text" name="name" placeholder="Ürün Adı" onChange={handleInputChange} required />
              <textarea name="description" placeholder="Ürün Açıklaması" onChange={handleInputChange} required />
              <input type="number" name="price" placeholder="Fiyat (₺)" onChange={handleInputChange} required />
              <input type="text" name="age_range" placeholder="Yaş Aralığı" onChange={handleInputChange} />
              <input type="text" name="material" placeholder="Materyal" onChange={handleInputChange} />

              <div
                className="image-drop-zone"
                onDrop={handleImageDrop}
                onDragOver={(e) => e.preventDefault()}
              >
                {imagePreview ? (
                  <img src={imagePreview} alt="Önizleme" className="preview-image" />
                ) : (
                  <p>Fotoğrafı buraya sürükleyip bırakın (.jpg formatında olmalıdır)</p>
                )}
              </div>

              <button type="submit" className="btn primary">Ürünü Kaydet</button>
            </form>
          )}

          <button className="btn toggle" onClick={() => setShowDeleteForm(!showDeleteForm)}>
            {showDeleteForm ? 'Silme Formunu Gizle' : 'Ürün Sil'}
          </button>

          {showDeleteForm && (
            <form className="admin-form">
              <input type="text" placeholder="Silinecek Ürün ID" required />
              <button type="submit" className="btn danger">Sil</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default UserAccount;
