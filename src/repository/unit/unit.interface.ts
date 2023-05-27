/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

export default interface UnitInterface {
    fetch: (data: any) => void;
    store: (data: any) => void;
    update: (data: any) => void;
    delete: (data: any) => void;
}
