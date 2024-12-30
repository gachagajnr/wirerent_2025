export default function AgencyDetails({ params }: { params: { slug: string } }) {
    const { slug } = params;
  
   
    return (
      <div>
        <h1>Agency Details Slug: {slug}</h1>
       
      </div>
    );
  }
  