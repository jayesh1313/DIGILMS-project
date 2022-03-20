import React, { useEffect, useState } from 'react'
import app_config from '../../config';
import '../../stylesheet/BrowseTrainer.css'
export default function BrowseTrainer() {

  const url = app_config.api_url;

  const [TrainerList, setTrainerList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTrainers = () => {
    fetch(url + "/Trainer/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setTrainerList(data);
      });
  };

  useEffect(() => {
    fetchTrainers();
  }, []);

  const showTrainers = () => {
    if (!loading) {
      return TrainerList.map((Trainer) => (
        
        <div class="card">
    <div class="content">
      <h2 class="title">{Trainer.fullname}</h2>
      <p class="copy">Dr.Rahul</p>
      <button class="btn">View Trainer</button>
    </div>
    </div>
      ));
    }
  };

  return (
    <div>
        
<main class="page-content">
  
  {showTrainers()}
  
</main>
    </div>
  )
}
