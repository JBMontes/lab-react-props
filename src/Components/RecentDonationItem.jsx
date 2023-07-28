const RecentDonationItem = ({productToRender})=>{
    return(
        <>
        <div>
            {productToRender.name} donated ${productToRender.amount}
            <br/>
            {productToRender.caption}
           
        </div>
        <br/>
        </>
    )
}

export default RecentDonationItem