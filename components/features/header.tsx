import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';

export const Header = () => {
  return (
    <Menubar className="h-12 rounded-none border-none bg-primary-violet">
      <div className="mx-5 text-2xl font-bold">DB Craft</div>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Import</MenubarItem>
          <MenubarItem>Export</MenubarItem>
          <MenubarItem disabled>
            Save <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Print... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Insert</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Arrange</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};
