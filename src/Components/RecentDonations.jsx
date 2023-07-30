import RecentDonationItem from "./RecentDonationItem.jsx";

function RecentDonations({donationsFromApp}) {

  return (
    <section>
  <h2>Recent Donations</h2>
  <ul>
    {donationsFromApp.map((item) => {return <RecentDonationItem donationsFromApp={item}/>})}
  </ul>
</section>
  );
}

  export default RecentDonations
  
  
