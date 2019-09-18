import React, { useState, useEffect } from 'react';

export default (props) => {
  const [orgs, setOrgs] = useState([])
  const arrOfOrgs = [];
  useEffect(async () => {
    try {
      await fetch('/api/orgs')
      .then(res => res.json)
      // what res should come back with is an array of objects
      .then(res => {
        setOrgs(res);
      })
    }
    catch (err) {
      console.log(err)
    }
    orgs.forEach((obj, idx) => {
      arrOfOrgs.push(<Organization {...orgs[idx]}/>)
    })
  }, [orgs]);

  return <div className="organizations">
    {arrOfOrgs}
  </div>
}