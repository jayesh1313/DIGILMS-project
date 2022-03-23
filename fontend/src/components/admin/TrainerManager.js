import React from 'react'
import app_config from '../../config'

 function TrainerManager() {

    const url = app_config.api_url;
  
    const fetchTrainers = () => {
        fetch(url+'/trainer/getall')
        .then
    }

    return (

    <div>
<table class="table">

  <thead>
    <tr>
      <th scope="col">S.No.</th>
      <th scope="col">Tainer Name</th>
      <th scope="col">ID</th>
      <th scope="col">Course</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

    </div>
  )
}
export default TrainerManager;