import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const APITable = () => {
  const operations = [
    {
      action: "Create",
      http: "POST",
      payload: "json",
      url: "/<resource>",
      description: "Create an entity represented by the JSON payload.",
    },
    {
      action: "Read",
      http: "GET",
      payload: "-",
      url: "/<resource>",
      description: "Get all entities from the resource.",
    },
    {
      action: "Read",
      http: "GET",
      payload: "-",
      url: "/<resource>/<id>",
      description: "Get a single entity.",
    },
    {
      action: "Update",
      http: "PUT",
      payload: "json",
      url: "/<resource>/<id>",
      description: "Update an entity with the JSON payload.",
    },
    {
      action: "Delete",
      http: "DELETE",
      payload: "-",
      url: "/<resource>/<id>",
      description: "Delete an entity.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Complete REST Operations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            All standard HTTP methods supported out of the box. No configuration
            needed.
          </p>
        </div>

        <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold">Action</TableHead>
                <TableHead className="font-semibold">HTTP</TableHead>
                <TableHead className="font-semibold">Payload</TableHead>
                <TableHead className="font-semibold">URL</TableHead>
                <TableHead className="font-semibold">Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {operations.map((op, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-muted/30 transition-colors"
                >
                  <TableCell className="font-medium">{op.action}</TableCell>
                  <TableCell>
                    <code className="text-sm bg-muted px-2 py-1 rounded">
                      {op.http}
                    </code>
                  </TableCell>
                  <TableCell>
                    <code className="text-sm">{op.payload}</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-sm text-muted-foreground">
                      {op.url}
                    </code>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {op.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-12 text-center space-y-4 text-muted-foreground max-w-3xl mx-auto">
          <p>Prefix all URLs with your unique REST endpoint</p>
          <p>
            <code className="text-sm bg-muted px-3 py-1 rounded">
              {"<resource>"}
            </code>{" "}
            can be any REST resource name
          </p>
          <p>
            <code className="text-sm bg-muted px-3 py-1 rounded">{"<id>"}</code>{" "}
            gets automatically generated for every entity you create
          </p>
        </div>
      </div>
    </section>
  );
};

export default APITable;
