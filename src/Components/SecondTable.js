const categories = [
    {
      name: "fruit",
      id: 1
    },
    {
      name: "vegatable",
      id: 2
    },
    {
      name: "animal",
      id: 3
    },
    {
      name: "car",
      id: 4
    },
    {
      name: "movies",
      id: 5
    }
  ];
  
  const values = [
    {
      name: "banana",
      id: 1
    },
    {
      name: "potato",
      id: 2
    },
    {
      name: "cat",
      id: 3
    },
    {
      name: "dog",
      id: 3
    },
    {
      name: "audi",
      id: 4
    },
    {
      name: "bmw",
      id: 4
    },
    {
      name: "mercedez",
      id: 4
    },
    {
      name: "toyota",
      id: 4
    },
    {
      name: "pirates",
      id: 5
    }
  ];

  
  let max = 0;
const tableData = categories.map((i) => {
  const newValues = values.filter((j) => {
    return i.id === j.id;
  });
  if (max < newValues.length) {
    max = newValues.length;
  }
  return newValues;
});

const rows = [];
for (let i = 0; i < max; i++) {
  rows.push(i);
}

function SecondTable() {
    return (
        <div>
            <table border="1">
                <thead>
                <tr>
                    {categories.map((category) => (
                    <th>{category.name}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {rows.map(function (i) {
                    return (
                    <tr>
                        {categories.map((category, index) => (
                        <td>{tableData[index][i]?.name}</td>
                        ))}
                    </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
    }

    export default SecondTable;