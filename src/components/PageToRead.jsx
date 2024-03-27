import { useEffect, useState } from 'react';
import { ResponsiveContainer,Bar,BarChart, XAxis, YAxis} from 'recharts'
import { getDataFromLocalStorage } from './localStorage';

// const data = [
//   {
//     name: "python",
//     student: 35
//   },
//   {
//     name: "php",
//     student: 55
//   },
//   {
//     name: "java",
//     student: 20
//   },
//   {
//     name: "Go",
//     student: 22
//   }
// ]

const getPath = (x, y, width, height) => (
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
   Z`
);

const TriangleBar = (props) => {
  const {
    fill, x, y, width, height,
  } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};




const PageToRead = () => {
  const [bookData, setBookData]=useState([])
    useEffect(()=>{
        const data= getDataFromLocalStorage()
        setBookData(data)
    },[])
 
console.log(bookData)





  return (
    <div className='w-4/5 mx-auto my-10'>
      <ResponsiveContainer width="100%" aspect={1.5}>
        <BarChart data={bookData} width={400} height={400}>
          <XAxis dataKey="bookName"></XAxis>
          <YAxis dataKey="totalPages"></YAxis>
          <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />}></Bar>
        </BarChart>
      </ResponsiveContainer>
      
    </div>
  );
};

export default PageToRead;
