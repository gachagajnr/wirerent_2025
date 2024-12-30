export default function UnitDetails({ params }: { params: { slug: string } }) {
    const { slug } = params;
  
   
    return (
      <div>
        <h1>Unit Details Slug: {slug}</h1>
       
      </div>
    );
  }
  