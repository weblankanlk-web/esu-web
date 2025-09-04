declare module "rooster-jobs" {
  interface RoosterOptions {
    defaultSubsidiary?: number;
    showSearch?: boolean;
    showClass?: boolean;
    showSubclass?: boolean;
    showDepartment?: boolean;
    showJobType?: boolean;
    showSubsidiaryFilter?: boolean;
    pageSize?: number;
    sandbox?: boolean;
  }

  export default class Rooster {
    constructor(selector: string, companyId: number, options?: RoosterOptions);
    setup(): void;
  }
}
