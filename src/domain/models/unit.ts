/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

export class UnitModel  {
    id: number;
    name: string;
    branch_id: string;
    branch: object;


    constructor(
        id: number,
        name: string,
        branch_id: string,
        branch: object,

    ) {

        this.id = id;
        this.name = name;
        this.branch_id = branch_id;
        this.branch = branch;
    }

    public static fromJson(data: any): any | UnitModel {

        try {
            return new UnitModel(
                data.ID,
                data.Name,
                data.branch_id,
                data.Branch
            );
        } catch {
            return null;
        }
    }

    public static fromJsonList(data: any): any | UnitModel[] {
        try {
            let listUnitModel: UnitModel[];
            listUnitModel = [];

            for (let x = 0; x < data.length; x++) {
                listUnitModel.push(UnitModel.fromJson(data[x]));
            }

            return listUnitModel
        } catch {
            return [];
        }
    }
}
