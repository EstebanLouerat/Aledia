const { Pool, Client } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'test_al',
    password: 'coi1234',
    port: 5432
})

exports.getData = (req, res) => {
    pool.query(`SELECT * FROM "split_entry" AS "Split Entry";`, (err, res) => {
        if (err) throw err;
        console.log(res)
        pool.end()
    })
}

const valuesEntryConcat = (refid, sn, lot, lt, sg, sgd, job, user) => {
    var concat_str = "";

    for(var index = 0; sn.length > index; index++) {
        concat_str += "((" + refid + "), '" + sn[index] + "', '" + lot[index] + `', ` + lt[index] + `, '` + sg[index] + "', '" + sgd[index] + "', '" + job + "', '" + user + "')"

        if (sn[index + 1]) 
            concat_str += ", "
    }
    // console.log(concat_str)
    return concat_str;
}

exports.sendData = (req, res) => {
    const data = req.body;
    const nextVal = "SELECT nextval('split_history_refid_seq');"

    const split_refid = "SELECT currval('split_history_refid_seq')";
    const split_name = [];
    const split_lot_id = [];
    const laser_tag = [];
    const split_group = [];
    const split_group_desc = [];
    const split_insert_job = "split";
    const split_user = "user";

    data.forEach(element => {
        element.forEach( (object, index) => {
            if (!object.readOnly && object.value)
                switch (index) {
                    case 1:
                        split_name.push(object.value)
                        break;
                    case 2:
                        split_lot_id.push(object.value)
                        break;
                    case 3:
                        const str = `(SELECT pk_wafer FROM public.wafer WHERE substrat_lasermark = '${object.value}')`;
                        laser_tag.push(str)
                        break;
                    case 4:
                        split_group.push(object.value)
                        break;
                    case 5:
                        split_group_desc.push(object.value)
                        break;
                    default:
                        break;
                }
        })
    });

    // valuesEntryConcat(split_refid, split_name, split_lot_id, laser_tag, split_group, split_group_desc)
    res.send("Data send to api")
    pool.query(`${nextVal}INSERT INTO public.${process.env.DB_DATA_NAME} (split_refid, split_name, split_lot_id, split_fk_wafer, split_group, split_group_desc, split_insert_job, split_user) VALUES ${valuesEntryConcat(split_refid, split_name, split_lot_id, laser_tag, split_group, split_group_desc, split_insert_job, split_user)};`, (err, res) => {
        if (err) throw err;
        console.log(res)
        pool.end();
    })
}

exports.findData = (req, res) => {
    const id = req.params.id;
    
    pool.query(`SELECT * FROM public.${process.env.DB_DATA_NAME} AS "Split Entry" WHERE ${process.env.DB_DATA_NAME}."id" = '${id}';`, (err, res) => {
        if (err) throw err;
        console.log(res)
        pool.end()
    })
}

exports.removeData = (req, res) => {
    // pool.query(`SELECT * FROM "split_entry" AS "Split Entry" WHERE "split_entry"."id" = '${id}';`, (err, res) => {
    //     if (err) throw err;
    //     console.log(res)
    //     pool.end()
    // })
    res.json({ message: "remove : { 'data' }" });
    res.send(`Data removed.`);
}

exports.removeDataById = (req, res) => {
    res.send(`Data with id = ${id} removed.`);
}

exports.updateData = (req, res) => {
    res.json({ message: `update with id = ${req.params.id} : { 'data' }`});
}