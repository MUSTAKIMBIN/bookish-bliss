import { ResponsiveContainer,Bar,BarChart, XAxis, YAxis} from 'recharts'

const data = [
  {
    name: "python",
    student: 35
  },
  {
    name: "php",
    student: 55
  },
  {
    name: "java",
    student: 20
  },
  {
    name: "Go",
    student: 22
  }
]

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
  return (
    <div className='w-4/5 mx-auto my-10'>
      <ResponsiveContainer width="90%" aspect={1.5}>
        <BarChart data={data} width={400} height={400}>
          <XAxis dataKey="name"></XAxis>
          <YAxis dataKey="student"></YAxis>
          <Bar dataKey="student" fill="#8884d8" shape={<TriangleBar />}></Bar>
        </BarChart>
      </ResponsiveContainer>
      
    </div>
  );
};

export default PageToRead;
