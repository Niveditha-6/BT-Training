type IProps = {
  color: string[];
};
export default function ArrayAsProps({ color }: IProps) {
  return (
    <>
      {color.map((c: string, i: number) => (
        <div key={i}> {c} </div>
      ))}
    </>
  );
}
