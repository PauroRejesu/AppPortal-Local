export class Certificate{

    constructor (
      public typeDoc: string,
      public id: string,
			public history: number,
			public income: number,
			public dateRequest: Date,
			public fullName?: string,
      public imgId?: string,
      public usser?: string,
			public email?: string,
			public dateHosp?: Date,
			public statusCert?: boolean,
			public uid?: string,
    ){ }
}
