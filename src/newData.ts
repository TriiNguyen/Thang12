export type Data = {
  name: string;
  src: string;
  placeholder?: { src: string; placeholder: string };
};

const array2 = new Array(2).fill(1).map((_, index) => index + 1);
const array3 = new Array(3).fill(1).map((_, index) => index + 1);
const array4 = new Array(4).fill(1).map((_, index) => index + 1);
const array6 = new Array(6).fill(1).map((_, index) => index + 1);
const array8 = new Array(8).fill(1).map((_, index) => index + 1);
const array9 = new Array(9).fill(1).map((_, index) => index + 1);
const array10 = new Array(10).fill(1).map((_, index) => index + 1);

//destination wedding
const trithanh = array9.map((item) => ({
  name: `trithanh${item}`,
  src: `https://thang12.s3.ap-southeast-1.amazonaws.com/1.+DESTINATION+WEDDING/1.1+Tri%CC%81+Thanh/TMH_Tri+Thanh-0${item}.jpg`,
}));
const linhkong = array9.map((item) => ({
  name: `linhkong${item}`,
  src: `https://thang12.s3.ap-southeast-1.amazonaws.com/1.+DESTINATION+WEDDING/1.2+Linh+Kong/TMH_Linh+Kong-0${item}.jpg`,
}));

const kathyUyen = array3.map((item) => ({
  name: `kathyUyen${item}`,
  src: `https://thang12.s3.ap-southeast-1.amazonaws.com/1.+DESTINATION+WEDDING/1.3+Kathy+Uye%CC%82n/TMH_Kathy-0${item}.jpg`,
}));

const minhHuy = array4.map((item) => ({
  name: `minhHuy${item}`,
  src: `https://thang12.s3.ap-southeast-1.amazonaws.com/1.+DESTINATION+WEDDING/1.4+Minh+Huy/TMH_Minh+Huy-0${item}.jpg`,
}));

const nyVy = array3.map((item) => ({
  name: `nyVy${item}`,
  src: `https://thang12.s3.ap-southeast-1.amazonaws.com/1.+DESTINATION+WEDDING/1.5+Ny+Vy%CC%83/TMH_Ny+Vy-0${item}.jpg`,
}));

export const destinationWedding: Data[] = [
  ...trithanh,
  ...linhkong,
  ...kathyUyen,
  ...minhHuy,
  ...nyVy,
];

//ballroom wedding
const khueDao = array6.map((item) => ({
  name: `khueDao${item}`,
  src: `https://thang12.s3.ap-southeast-1.amazonaws.com/2.+BALLROOM+WEDDING/2.1+Khue%CC%82+%C4%90a%CC%A3o/TMH_Khue+Dao-0${item}.jpg`,
}));

const linhLuan = array3.map((item) => ({
  name: `linhLuan${item}`,
  src: `https://thang12.s3.ap-southeast-1.amazonaws.com/2.+BALLROOM+WEDDING/2.2+Linh+Lua%CC%82n/TMH_Linh+Luan-0${item}.jpg`,
}));

const tinaNico = array6.map((item) => ({
  name: `tinaNico${item}`,
  src: `https://thang12.s3.ap-southeast-1.amazonaws.com/2.+BALLROOM+WEDDING/2.3+Tina+Nico+Vu%CC%9Bo%CC%9B%CC%80n/TMH_NH_Tina+Nico-0${item}.jpg`,
}));

const chloe = array3.map((item) => ({
  name: `chloe${item}`,
  src: `https://thang12.s3.ap-southeast-1.amazonaws.com/2.+BALLROOM+WEDDING/2.4+Chloe+(Trang+Peter)/TMH_Trang+Peter-0${item}.jpg`,
}));

export const ballroomWedding: Data[] = [
  ...khueDao,
  ...linhLuan,
  ...tinaNico,
  ...chloe,
];

//private party
const tranVinh = array3.map((item) => ({
  name: `tranVinh${item}`,
  src: `https://thang12.s3.ap-southeast-1.amazonaws.com/3.+PRIVATE+PARTY/3.1+Tra%CC%82n+Vinh+(trai)/TMH_Tra%CC%82n+Vinh+Trai-0${item}.jpg`,
}));

const tangThanhHa = array2.map((item) => ({
  name: `tangThanhHa${item}`,
  src: `https://thang12.s3.ap-southeast-1.amazonaws.com/3.+PRIVATE+PARTY/3.2+Ta%CC%86ng+Thanh+Ha%CC%80/TMH_Tang+Thanh+Ha-0${item}.jpg`,
}));

const thanhNgoc = array2.map((item) => ({
  name: `thanhNgoc${item}`,
  src: `https://thang12.s3.ap-southeast-1.amazonaws.com/3.+PRIVATE+PARTY/3.3+Thanh+Ngo%CC%A3c/TMH_Thanh+Ngoc-0${item}.jpg`,
}));

export const privateParty: Data[] = [...tranVinh, ...tangThanhHa, ...thanhNgoc];

//traditional Ceremony
const tinaNicoGiaTien = array6.map((item) => ({
  name: `tinaNicoGiaTien${item}`,
  src: `https://thang12.s3.ap-southeast-1.amazonaws.com/4.+TRADITIONAL+CEREMONY/4.1+Tina+Nico+Gia+Tie%CC%82n/TMH_GT_Tina+Nico-0${item}.jpg`,
}));

const huyMic = array2.map((item) => ({
  name: `huyMic${item}`,
  src: `https://thang12.s3.ap-southeast-1.amazonaws.com/4.+TRADITIONAL+CEREMONY/4.2+Huy+Mic/TMH_Huy+Mic-0${item}.jpg`,
}));

const tranVinhGai = array2.map((item) => ({
  name: `tranVinhGai${item}`,
  src: `https://thang12.s3.ap-southeast-1.amazonaws.com/4.+TRADITIONAL+CEREMONY/4.3+Tra%CC%82n+Vinh+(ga%CC%81i)/TMH_Tra%CC%82n+Vinh+Ga%CC%81i-0${item}.jpg`,
}));

const vietHoa = array6.map((item) => ({
  name: `vietHoa${item}`,
  src: `https://thang12.s3.ap-southeast-1.amazonaws.com/4.+TRADITIONAL+CEREMONY/4.4+Vie%CC%A3%CC%82t+Hoa/TMH_GT_Viet+Hoa-0${item}.jpg`,
}));

const khanhNguyen = array2.map((item) => ({
  name: `khanhNguyen${item}`,
  src: `https://thang12.s3.ap-southeast-1.amazonaws.com/4.+TRADITIONAL+CEREMONY/4.5+Khanh+Nguye%CC%82n+Layon/TMH_GT_Khanh+Nguyen-0${item}.jpg`,
}));

const khanhDinh = array2.map((item) => ({
  name: `khanhDinh${item}`,
  src: `https://thang12.s3.ap-southeast-1.amazonaws.com/4.+TRADITIONAL+CEREMONY/4.6+Khanh+Dinh/TMH_Khanh+Dinh-0${item}.jpg`,
}));

export const traditionalCeremony: Data[] = [
  ...tinaNicoGiaTien,
  ...huyMic,
  ...tranVinhGai,
  ...vietHoa,
  ...khanhNguyen,
  ...khanhDinh,
];

//table decoration
export const tableDecoration = array3.map((item) => ({
  name: `tableDecoration${item}`,
  src: `https://thang12.s3.ap-southeast-1.amazonaws.com/5.+TABLE+DECORATION/TMH_Table+Decor-0${item}.jpg`,
}));
