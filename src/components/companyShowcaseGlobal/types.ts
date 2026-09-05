import { ICompany } from '@/constants/experiences';

export interface ICompanyShowcaseGlobalProps {
  companies: ICompany[];
  selectedCompany?: string | null;
  onSelectCompany?: (companyName: string | null) => void;
  totalExperiencesCount?: number;
}
