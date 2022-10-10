
type IProps = {
  info: string;
  // making optional props
  status?: string ;
  isHappy : string;
};

// export default function Message(props : IProps) {

// destructing props
export default function Message({ info, status, isHappy }: IProps) {
  return (
    <>
      {/* <div>Hello!! {props.info}, status is {props.status}</div> */}
      <div>
        Hello!! {info}, status is {status} and is {isHappy}
      </div>
    </>
  );
}


//Making a prop value default
Message.defaultProps = {
    isHappy: 'No'
}
