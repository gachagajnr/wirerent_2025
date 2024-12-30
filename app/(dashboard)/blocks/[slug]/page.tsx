export default function BlockDetails({ params }: { params: { slug: string } }) {
    const { slug } = params;
  
   
    return (
      <div>
        <h1>Block Details Slug: {slug}</h1>
       
      </div>
    );
  }
  