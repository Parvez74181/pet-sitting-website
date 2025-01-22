export interface Thana {
  english_name: string;
  bangla_name: string;
}

export interface District {
  districtEn: string;
  districtBn: string;
  thana: Thana[];
}

export interface DistrictData {
  districts: District[];
}

export interface SitterFindingModalForm {
  location: string;
  service: string;
  from: string;
  to: string;
}
