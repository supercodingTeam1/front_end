


export const formatPhoneNumber = (value: string) : string => {
  // 숫자만 추출
  const cleaned = ('' + value).replace(/\D/g, '');
  // 하이픈 추가
  const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return value;
};
