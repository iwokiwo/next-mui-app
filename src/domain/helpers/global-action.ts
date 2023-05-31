/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */


export const globalAction = async (loading: any,notif: any,options: any = {}) => {
    const {setLoading } = loading
    const {setNotif} = notif

    try {

        setLoading(true)
        if (options.complexAction) {

            await options.action()
            return
        }

        const res = await options.action()

        setNotif(true, (res.data.code! === 200 || res.data.code! === 202) ? "success":"error", res.message!)
        //if (res) res.base?.map(message => setNotification(message))

        if (options.afterAction) options.afterAction()
    } catch (e: any) {

        if (options.onError) {
            options.onError()
        }

        if (!e.errors) return

        if (options.setErrors) {
            options.setErrors(e.errors)
            return
        }

        //e.errors.base?.map(message => setNotification(message))
        setNotif(true, e.status!, e.message!)
    } finally {
        setLoading(false)
    }
}
