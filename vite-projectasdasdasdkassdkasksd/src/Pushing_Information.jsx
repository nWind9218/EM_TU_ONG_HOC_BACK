import {React,useState} from 'react'

function Pushing_Information() {
  const handleClick = () =>{
      const gender = document.getElementById('gender').value;
      const shape = document.getElementById('shape').value;
      const skin_tone = document.getElementById('skin_tone').value;
      const leg_length = document.getElementById('leg_length').value;
      const bmi = document.getElementById('bmi').value;
  
      const data = {
        gender,
        shape,
        skin_tone,
        leg_length,
        bmi
      };
      fetch('https://localhost:3000/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      console.log(data);
    }
    
    const [gender, setGender] = useState()
    return(
      <>
      <br></br>
      <label htmlFor='gender'>Giới tính: </label>
      <select id='gender' name='gender' onChange={(e) => setGender(e.target.value)}>
        <option value="1">Male</option>
        <option value="2">Female</option>
      </select>
      <br></br>
        <label htmlFor='shape'>Dáng người: </label>    
        {gender === '1' && (
        <>
          <select id='shape' name='shape'>
            <option value="Hình Thang Ngược">Hình Thang Ngược</option>
            <option value="Tam Giác Thuận">Tam Giác Thuận</option>
            <option value="Tam Giác Ngược">Tam Giác Ngược</option>
            <option value="Hình Chữ Nhật">Hình Chữ Nhật</option>
            <option value="Dáng Oval">Dáng Oval</option>
          </select>
        </>
        )}
        {gender === '2' && (
        <>
          <select id='shape' name='shape'>
            <option value="Đồng Hồ Cát">Đồng Hồ Cát</option>
            <option value="Quả Lê">Quả Lê</option>
            <option value="Tam Giác Ngược">Tam Giác Ngược</option>
            <option value="Hình Chữ Nhật">Hình Chữ Nhật</option>
            <option value="Quả Táo">Quả Táo</option>
          </select>
        </>
        )}
      <br></br>
      <label htmlFor='skin_tone'>Màu da: </label>
      <select id='skin_tone' name='skin_tone'>
        <option value="Da Lạnh">Da Lạnh</option>
        <option value="Da Trung Tính">Da Trung Tính</option>
        <option value="Da Ấm">Da Ấm</option>
      </select>
      <br></br>
      <label htmlFor='leg_length'>Chiều dài chân: </label>
      <select id='leg_length' name='leg_length'>
        <option value="Ngắn">Ngắn</option>
        <option value="Vừa">Vừa</option>
        <option value="Dài">Dài</option>
      </select>
      <br></br>
        <label htmlFor='bmi'>BMI: </label>
        <select id='bmi' name='bmi'>
          <option value="Thiếu Cân">Thiếu Cân</option>
          <option value="Bình Thường">Bình Thường</option>
          <option value="Thừa Cân">Thừa Cân</option>
          <option value="Béo Phì">Béo Phì</option>
        </select>
        <br></br>
        <button onClick={handleClick}>Submit to API</button>
      </>
    );
}

export default Pushing_Information