import ImageGallery from "react-image-gallery";
import { Box } from "@chakra-ui/react";

const images = [
  {
    original:
      "https://ranmaru-image.s3.ap-northeast-1.amazonaws.com/016F684B-311F-4725-9EEC-835DD38C557C_1_105_c.jpeg",
    thumbnail:
      "https://ranmaru-image.s3.ap-northeast-1.amazonaws.com/016F684B-311F-4725-9EEC-835DD38C557C_1_105_c.jpeg",
  },
  {
    original:
      "https://ranmaru-image.s3.ap-northeast-1.amazonaws.com/012D4AE2-3045-41F7-872F-2137679185CB_1_105_c.jpeg",
    thumbnail:
      "https://ranmaru-image.s3.ap-northeast-1.amazonaws.com/012D4AE2-3045-41F7-872F-2137679185CB_1_105_c.jpeg",
  },
  {
    original:
      "https://ranmaru-image.s3.ap-northeast-1.amazonaws.com/418D18DF-A91E-43C5-8F3B-4E175C260A19_1_105_c.jpeg",
    thumbnail:
      "https://ranmaru-image.s3.ap-northeast-1.amazonaws.com/418D18DF-A91E-43C5-8F3B-4E175C260A19_1_105_c.jpeg",
  },
  {
    original:
      "https://ranmaru-image.s3.ap-northeast-1.amazonaws.com/4ABFB71A-E00D-4C67-9CE4-24DA128EED9E_1_105_c.jpeg",
    thumbnail:
      "https://ranmaru-image.s3.ap-northeast-1.amazonaws.com/4ABFB71A-E00D-4C67-9CE4-24DA128EED9E_1_105_c.jpeg",
  },
  {
    original:
      "https://ranmaru-image.s3.ap-northeast-1.amazonaws.com/6B71B4A4-BAC9-42D5-A32A-B3EDB6406229_1_105_c.jpeg",
    thumbnail:
      "https://ranmaru-image.s3.ap-northeast-1.amazonaws.com/6B71B4A4-BAC9-42D5-A32A-B3EDB6406229_1_105_c.jpeg",
  },
  {
    original:
      "https://ranmaru-image.s3.ap-northeast-1.amazonaws.com/A9E998D0-5531-411C-B81A-BDD227F655D9_1_105_c.jpeg",
    thumbnail:
      "https://ranmaru-image.s3.ap-northeast-1.amazonaws.com/A9E998D0-5531-411C-B81A-BDD227F655D9_1_105_c.jpeg",
  },
  {
    original:
      "https://ranmaru-image.s3.ap-northeast-1.amazonaws.com/B3B725F4-5EEF-4206-816C-4726A8C1A3D3_1_105_c.jpeg",
    thumbnail:
      "https://ranmaru-image.s3.ap-northeast-1.amazonaws.com/B3B725F4-5EEF-4206-816C-4726A8C1A3D3_1_105_c.jpeg",
  },
  {
    original:
      "https://ranmaru-image.s3.ap-northeast-1.amazonaws.com/F1036B8F-7221-4F61-A3C4-F7FF90C1B531_1_105_c.jpeg",
    thumbnail:
      "https://ranmaru-image.s3.ap-northeast-1.amazonaws.com/F1036B8F-7221-4F61-A3C4-F7FF90C1B531_1_105_c.jpeg",
  },
  {
    original:
      "https://ranmaru-image.s3.ap-northeast-1.amazonaws.com/F33C43B8-A559-48E6-9632-77AF4C8346B8_1_105_c.jpeg",
    thumbnail:
      "https://ranmaru-image.s3.ap-northeast-1.amazonaws.com/F33C43B8-A559-48E6-9632-77AF4C8346B8_1_105_c.jpeg",
    sizes: "",
  },
];
export const Gallery = () => {
  return <ImageGallery items={images} />;
};
