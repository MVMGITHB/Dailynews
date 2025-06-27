import Article from "@/components/Article/Article";
import { base_url } from "@/components/Helper/helper";
import axios from "axios";


const page = async ({ params }) => {
  const { slugName } =await params;


  try {
    const response = await axios.get(
      `${base_url}/api/blog/getOneBlogByslug/${slugName}`
    );
    const data1 = response.data;
   
    return (
      <div>
        <Article data={data1} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching article:", error);
    return <div>Failed to load article.</div>;
  }
};

export default page;
