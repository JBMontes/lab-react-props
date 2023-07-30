const RecentDonationItem = ({donationsFromApp})=>{
    
    return(
        <>
        <li>
            <span>
            {donationsFromApp.name} donated ${donationsFromApp.amount}
            </span>
            {donationsFromApp.caption}
        </li>
        </>
    )
}

export default RecentDonationItem