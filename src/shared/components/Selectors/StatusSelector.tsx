import { Select, SelectProps } from 'antd';

function StatusSelector({ ...rest }: SelectProps) {
  const options = [
    { label: 'InActive', value: '' },
    { label: 'Active', value: 'Active' },
  ];
  return <Select showSearch options={options} placeholder="" {...rest} />;
}

export default StatusSelector;
