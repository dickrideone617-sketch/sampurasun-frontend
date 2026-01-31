import React, { useState } from 'react';

/* ===== NAVBAR ===== */
function Navbar() {
  return (
    <div style={{
      background: '#16a34a',
      color: 'white',
      padding: '15px 30px',
      fontWeight: 'bold',
      fontSize: 18
    }}>
      SAMPURASUN – Disparekraf Kab. Bogor
    </div>
  );
}

/* ===== FORM LAPORAN ===== */
function LaporanForm() {
  const [form, setForm] = useState({
    nusantara: '',
    mancanegara: '',
    asal: '',
    lamaMenginap: '',
    okupansi: '',
    pengeluaran: ''
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert('✅ Laporan berhasil disimpan (sementara)');
    console.log(form);
    setForm({
      nusantara: '',
      mancanegara: '',
      asal: '',
      lamaMenginap: '',
      okupansi: '',
      pengeluaran: ''
    });
  }

  return (
    <form onSubmit={handleSubmit} style={{
      background: 'white',
      padding: 20,
      borderRadius: 8,
      maxWidth: 500
    }}>
      <h3>Laporan Kunjungan Bulanan</h3>

      <label>Wisatawan Nusantara</label><br/>
      <input name="nusantara" value={form.nusantara} onChange={handleChange} type="number" required /><br/><br/>

      <label>Wisatawan Mancanegara</label><br/>
      <input name="mancanegara" value={form.mancanegara} onChange={handleChange} type="number" required /><br/><br/>

      <label>Negara Asal Wisman Terbanyak</label><br/>
      <input name="asal" value={form.asal} onChange={handleChange} /><br/><br/>

      <label>Rata-rata Lama Menginap (hari)</label><br/>
      <input name="lamaMenginap" value={form.lamaMenginap} onChange={handleChange} type="number" step="0.1" /><br/><br/>

      <label>Tingkat Okupansi (%)</label><br/>
      <input name="okupansi" value={form.okupansi} onChange={handleChange} type="number" /><br/><br/>

      <label>Rata-rata Pengeluaran (Rp)</label><br/>
      <input name="pengeluaran" value={form.pengeluaran} onChange={handleChange} type="number" /><br/><br/>

      <button type="submit" style={{
        background: '#16a34a',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: 5
      }}>
        Simpan Laporan
      </button>
    </form>
  );
}

/* ===== APP ===== */
export default function App() {
  return (
    <div>
      <Navbar />

      <div style={{ padding: 30, background: '#f3f4f6', minHeight: '100vh' }}>
        <h2>Dashboard Stakeholder</h2>
        <p>Silakan isi laporan kunjungan bulan ini</p>

        <LaporanForm />
      </div>
    </div>
  );
}
