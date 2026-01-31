import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({
    nusantara: "",
    mancanegara: "",
    okupansi: "",
    pengeluaran: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Laporan tersimpan (versi awal)");
    setForm({
      nusantara: "",
      mancanegara: "",
      okupansi: "",
      pengeluaran: "",
    });
  };

  return (
    <div style={{ padding: 30, maxWidth: 500 }}>
      <h2>Laporan Wisatawan Bulanan</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="nusantara"
          placeholder="Wisatawan Nusantara"
          value={form.nusantara}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          name="mancanegara"
          placeholder="Wisatawan Mancanegara"
          value={form.mancanegara}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          name="okupansi"
          placeholder="Okupansi (%)"
          value={form.okupansi}
          onChange={handleChange}
        /><br /><br />

        <input
          name="pengeluaran"
          placeholder="Rata-rata Pengeluaran"
          value={form.pengeluaran}
          onChange={handleChange}
        /><br /><br />

        <button type="submit">Simpan Laporan</button>
      </form>
    </div>
  );
}

export default App;
